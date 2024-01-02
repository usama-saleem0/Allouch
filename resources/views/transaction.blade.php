<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PayPal Transaction</title>
</head>
<body>
    <h1>PayPal Transaction</h1>

    @if(session('success'))
        <div style="color: green;">{{ session('success') }}</div>
    @endif

    @if(session('error'))
        <div style="color: red;">{{ session('error') }}</div>
    @endif

    <form action="{{ route('processTransaction') }}" method="get">
        @csrf
        <button type="submit">Pay Now</button>
    </form>
</body>
</html>
