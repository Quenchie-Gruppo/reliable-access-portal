<?php

namespace App\Http\Controllers;

use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PackageController extends Controller
{
    // Display a listing of packages
    public function index()
    {
        $packages = Package::all();
        return response()->json($packages);
    }

    // Store a newly created package
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string',
            'duration' => 'required|string|max:255',
            'wallet_bonus' => 'nullable|string|max:255',
        ]);

        $package = Package::create($request->all());

        return response()->json([
            'message' => 'Package created successfully.',
            'package' => $package
        ], 201);
    }

    // Display the specified package
    public function show($id)
    {
        $package = Package::find($id);

        if (!$package) {
            return response()->json(['message' => 'Package not found'], 404);
        }

        return response()->json($package);
    }

    // Update the specified package
    public function update(Request $request, $id)
    {
        // Ensure the user is an admin
        if (Auth::user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $package = Package::find($id);

        if (!$package) {
            return response()->json(['message' => 'Package not found'], 404);
        }

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric',
            'description' => 'sometimes|required|string',
            'duration' => 'sometimes|required|string|max:255',
            'wallet_bonus' => 'sometimes|nullable|string|max:255',
        ]);

        $package->update($request->all());

        return response()->json([
            'message' => 'Package updated successfully.',
            'package' => $package
        ]);
    }

    // Remove the specified package
    public function destroy($id)
    {
        // Ensure the user is an admin
        if (Auth::user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $package = Package::find($id);

        if (!$package) {
            return response()->json(['message' => 'Package not found'], 404);
        }

        $package->delete();

        return response()->json([
            'message' => 'Package deleted successfully.',
            'deleted_package' => $package // Show the deleted package details
        ]);
    }
}
