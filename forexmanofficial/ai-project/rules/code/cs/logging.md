# Logging Conventions

## Purpose

Enforces consistent logging levels and structured logging patterns across handlers and services.

## Applies To

All `.cs` files that use `ILogger`.

## Rules

### Log Levels

| Level | When to use | Example |
|-------|------------|---------|
| `LogError` | Unhandled/unexpected exceptions | `logger.LogError(ex, "Unexpected error in {Handler}", nameof(OnPostCreateAsync));` |
| `LogWarning` | Expected business failures — duplicate key, not found, auth fail, rate limit | `logger.LogWarning(ex, "Duplicate key in {Handler}", nameof(OnPostCreateAsync));` |
| `LogInformation` | Significant business actions — payout created, account connected, settings changed | `logger.LogInformation("Payout {PayoutId} created by {UserId}", payout.Id, userId);` |

Do NOT log at `LogDebug` or `LogTrace` in application code — reserve for framework internals.

### Structured Logging

Always use message templates with named placeholders — never string interpolation or concatenation.

| Correct | Wrong |
|---------|-------|
| `logger.LogError(ex, "Error in {Handler}", nameof(OnPostSaveAsync))` | `logger.LogError(ex, $"Error in {nameof(OnPostSaveAsync)}")` |
| `logger.LogInformation("Payout {PayoutId} created", id)` | `logger.LogInformation("Payout " + id + " created")` |

### Exception Logging

Always pass the exception object as the first parameter — never log only the message.

```csharp
// GOOD
logger.LogError(ex, "Failed to process payout {PayoutId}", payoutId);

// BAD
logger.LogError("Failed to process payout: " + ex.Message);
```

### What NOT to Log

- Do NOT log sensitive data (passwords, tokens, full card numbers)
- Do NOT log every request or query — only significant actions and failures
- Do NOT log inside tight loops

## Constraints

- NEVER use string interpolation in log messages — use structured message templates
- NEVER log at `LogDebug`/`LogTrace` in application code
- NEVER log sensitive user data (passwords, tokens, PII)
- NEVER log `ex.Message` alone — pass the full `ex` object
- ALWAYS include handler/method name context in error logs via `nameof()`
- ALWAYS use `LogWarning` for expected failures, `LogError` for unexpected exceptions
