<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "bank_name",
        "branch_name",
        "account_name",
        "account_number",
        "pin_code",
        "ifsc",
        "upi"
    ];
}
