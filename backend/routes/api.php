<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\DeviceController;

// CSRF cookie route for Sanctum
Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public route for getting all packages
Route::get('/packages', [PackageController::class, 'index']); // Get all packages without authentication

// Protected routes (require Sanctum authentication)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // Package routes that require authentication
    Route::post('/packages', [PackageController::class, 'store']); // Create a new package
    Route::get('/packages/{id}', [PackageController::class, 'show']); // Get a specific package
    Route::put('/packages/{id}', [PackageController::class, 'update']); // Update a specific package
    Route::delete('/packages/{id}', [PackageController::class, 'destroy']); // Delete a specific package

    // Device routes that require authentication
    Route::get('/devices', [DeviceController::class, 'index']); // Get all devices for the authenticated user
    Route::post('/devices', [DeviceController::class, 'store']); // Add a new device
    Route::put('/devices/{device}', [DeviceController::class, 'update']); // Update a specific device
    Route::delete('/devices/{device}', [DeviceController::class, 'destroy']); // Delete a specific device



    // User management routes (Admin only)
    Route::middleware('admin')->group(function () {
        Route::get('/users', [AuthController::class, 'fetchAllUsers']); // Fetch all users
        Route::get('/users/{user}', [AuthController::class, 'viewUser']); // View a specific user
        Route::put('/users/{user}', [AuthController::class, 'updateUser']); // Update a specific user
        Route::delete('/users/{user}', [AuthController::class, 'deleteUser']); // Delete a specific user
    });

});
