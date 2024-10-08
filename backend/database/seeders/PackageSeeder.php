<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Package;

class PackageSeeder extends Seeder
{
    public function run()
    {
        $packages = [
            [
                'title' => 'Mbao Konnect',
                'duration' => '2-Hour Unlimited Access',
                'wallet_bonus' => '2.5 Hours with Konnect Wallet',
                'price' => 20,
            ],
            [
                'title' => 'Kumi Konnect',
                'duration' => '40-Minute Unlimited Access',
                'wallet_bonus' => '1 Hour with Konnect Wallet',
                'price' => 10,
            ],
            [
                'title' => '8-Hour Konnect',
                'duration' => '8-Hour Unlimited Access',
                'wallet_bonus' => '9 Hours with Konnect Wallet',
                'price' => 50,
            ],
            [
                'title' => 'Daily Konnect',
                'duration' => '24-Hour Unlimited Access',
                'wallet_bonus' => '26 Hours with Konnect Wallet',
                'price' => 80,
            ],
            [
                'title' => 'Daily Konnect x2',
                'duration' => '24-Hour Unlimited Access, 2 Devices',
                'wallet_bonus' => '26 Hours with Konnect Wallet',
                'price' => 140,
            ],
            [
                'title' => 'Weekly Konnect',
                'duration' => '7-Day Unlimited Access, 2 Devices',
                'wallet_bonus' => null,
                'price' => 380,
            ],
            [
                'title' => 'Monthly Konnect',
                'duration' => '30-Day Unlimited Access, 2 Devices',
                'wallet_bonus' => null,
                'price' => 1000,
            ],
            [
                'title' => 'Family Konnect x3',
                'duration' => '30-Day Unlimited Access, 3 Devices',
                'wallet_bonus' => null,
                'price' => 1300,
            ],
            [
                'title' => 'Family Konnect x4',
                'duration' => '30-Day Unlimited Access, 4 Devices',
                'wallet_bonus' => null,
                'price' => 1600,
            ],
            [
                'title' => 'Family Konnect x5',
                'duration' => '30-Day Unlimited Access, 5 Devices',
                'wallet_bonus' => null,
                'price' => 1800,
            ],
            [
                'title' => 'Family Konnect x6',
                'duration' => '30-Day Unlimited Access, 6 Devices',
                'wallet_bonus' => null,
                'price' => 2000,
            ],
            [
                'title' => 'Family Konnect x3 (Quarterly)',
                'duration' => '90-Day Unlimited Access, 3 Devices',
                'wallet_bonus' => null,
                'price' => 3500,
            ],
            [
                'title' => 'Family Konnect x4 (Quarterly)',
                'duration' => '90-Day Unlimited Access, 4 Devices',
                'wallet_bonus' => null,
                'price' => 4200,
            ],
            [
                'title' => 'Family Konnect x5 (Quarterly)',
                'duration' => '90-Day Unlimited Access, 5 Devices',
                'wallet_bonus' => null,
                'price' => 4800,
            ],
            [
                'title' => 'Family Konnect x6 (Quarterly)',
                'duration' => '90-Day Unlimited Access, 6 Devices',
                'wallet_bonus' => null,
                'price' => 5300,
            ],
        ];

        foreach ($packages as $package) {
            Package::create($package);
        }
    }
}
