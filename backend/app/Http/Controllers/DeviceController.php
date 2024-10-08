<?php

// app/Http/Controllers/DeviceController.php
namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeviceController extends Controller
{
    public function index()
    {
        // Fetch devices for the authenticated user
        $devices = Device::where('user_id', Auth::id())->get();

        // Check if devices were found
        if ($devices->isEmpty()) {
            return response()->json([
                'message' => 'No devices found for the user.'
            ], 404);
        }

        // Return devices in JSON format
        return response()->json([
            'message' => 'Devices retrieved successfully.',
            'devices' => $devices
        ]);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'mac_address' => 'required|string|unique:devices,mac_address',
        ]);

        // Create a new device
        $device = Device::create([
            'user_id' => Auth::id(),
            'mac_address' => $request->mac_address,
        ]);

        // Return the created device in JSON format
        return response()->json([
            'message' => 'Device created successfully.',
            'device' => $device
        ], 201);
    }

    public function update(Request $request, Device $device)
    {
        // Authorize the user for updating the device
        $this->authorize('update', $device);
    
        // Validate the request
        $request->validate([
            'mac_address' => 'required|string|unique:devices,mac_address,' . $device->id,
        ]);
    
        // Update the device
        $device->mac_address = $request->mac_address; // Directly assign value for clarity
        $device->save(); // Save the updated device
    
        // Return the updated device in JSON format
        return response()->json([
            'message' => 'Device updated successfully.',
            'device' => $device
        ]);
    }
    
    public function destroy(Device $device)
    {
        // Authorize the user for deleting the device
        $this->authorize('delete', $device);
    
        // Store the device details before deletion
        $deletedDevice = $device->replicate(); // Create a copy of the device to return
        
        // Delete the device
        $device->delete();
    
        // Return a success message with the deleted device details
        return response()->json([
            'message' => 'Device deleted successfully.',
            'deleted_device' => $deletedDevice
        ], 200);
    }
}
