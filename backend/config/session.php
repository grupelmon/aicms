<?php

return [
    'driver' => env('SESSION_DRIVER', 'redis'),
    'lifetime' => env('SESSION_LIFETIME', 120),
    'connection' => env('SESSION_CONNECTION', 'default'),
    'encrypt' => false,
    'same_site' => 'lax',
];
