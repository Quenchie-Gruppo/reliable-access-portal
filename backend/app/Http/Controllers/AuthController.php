<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    // Register a new user
    public function register(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'phone' => 'required|string|unique:users', // Validate phone input
            'role' => 'nullable|string|in:user,admin', // Make role optional
        ]);

        // Create a new user with a default role if not specified
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone, // Assign the phone number
            'role' => $request->role ?? 'user', // Default role set to 'user' if not specified
        ]);

        // Create a token for the user
        $token = $user->createToken('auth_token')->plainTextToken;

        // Return a success response with the token and user details
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone, // Include phone in response
                'role' => $user->role, // Include role in response
            ],
        ], 201);
    }


    // Login user and create token
    public function login(Request $request)
    {
        // Validate the login request
        $request->validate([
            'email_or_phone' => 'required|string',
            'password' => 'required|string',
        ]);

        // Determine if the login is via phone or email
        $user = filter_var($request->email_or_phone, FILTER_VALIDATE_EMAIL) ?
            User::where('email', $request->email_or_phone)->first() :
            User::where('phone', $request->email_or_phone)->first();

        // Check if the user exists and the password is correct
        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email_or_phone' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Create a token for the authenticated user
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone, // Include phone in response
                'role' => $user->role,
            ],
        ]);
    }


    // Logout user and revoke the token
    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request
        $request->user()->currentAccessToken()->delete();

        // Destroy the session and invalidate the CSRF token
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Return a success response for logout
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    // Fetch all users (Admin only)
    public function fetchAllUsers(Request $request)
    {
        // Ensure that only an admin can access this route
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Fetch all users from the database
        $users = User::all();

        return response()->json($users);
    }

    // Fetch a specific user (Admin only)
    public function viewUser(Request $request, User $user)
    {
        // Ensure that only an admin can access this route
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        return response()->json($user);
    }

    // Update a specific user (Admin only)
    public function updateUser(Request $request, User $user)
    {
        if ($request->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        // Validate incoming request data for updating user info
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => "sometimes|required|string|email|max:255|unique:users,email,{$user->id}",
            'phone' => "sometimes|required|string|unique:users,phone,{$user->id}",
            'role' => "sometimes|nullable|string|in:user,admin",
        ]);

        // Update user details
        if ($request->has('name')) {
            $user->name = $request->name;
        }
        
        if ($request->has('email')) {
            $user->email = $request->email;
        }

        if ($request->has('phone')) {
            $user->phone = $request->phone;
        }

        if ($request->has('role')) {
            $user->role = $request->role;
        }

        // Save changes to the database
        $user->save();

        return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }

    // Delete a specific user (Admin only)
    public function deleteUser(Request $request, User $user)
    {
       if ($request->user()->role !== 'admin') {
           return response()->json(['message' => 'Unauthorized'], 403);
       }

       // Delete the user from the database
       $user->delete();

       return response()->json(['message' => 'User deleted successfully']);
   }

}
