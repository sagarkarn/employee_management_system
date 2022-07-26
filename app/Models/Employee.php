<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'employee_type',
        'grade',
        'join_date',
        'pf_number',
        'shift',
        'working_days',
        'created_by',
        'updated_by',
        'code',
        'status',
        'start_at',
        'end_at',

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function job()
    {
        return $this->belongsTo(Job::class);
    }
}
