# Guide > Features > Logging

Logging is provided by the plugin at `~/plugins/logger`.  
The default logger works during SSR and on the client's browser.

For future iterations, we may want to add one or more custom loggers, so that we can log
to multiple places based on severity. E.G. send FATAL to Slack, 
send ERROR to PaperTrail, etc.

## Using the logger

To use the logger, import it from `~/utilities/logger`

```vue
<script setup>
import { logger } from '~/utilities/logger'

logger.debug('test')
</script>
```

## Logging Severity

There are 8 logging methods available, for logging messages of different severity:

- `Logger.fatal()` System is unusable, action must be taken immediately. Could be a component unavailable or unexpected exception
- `Logger.error()` Runtime errors that do not require immediate action but should be logged and monitored
- `Logger.warn()` Exceptional occurrences that are not errors
- `Logger.log()` Normal but significant events
- `Logger.info()` Interesting events
- `Logger.start()` Log the start of some process
- `Logger.ready()` Log when something is ready
- `Logger.success()` Log when a process was successful
- `Logger.fail()` Log when a process failed
- `Logger.debug()` Detailed debug information
- `Logger.trace()` Extremely detailed debug information

Some logging implementations may handle some log levels in the same way. For example, the default
implementation calls `console.error()` for Emergency, Critical and Error levels. A Slack implementation
might log Emergency and Critical to a different channel than Error, for example.

### Setting which severity to log for the environment

We can customise what severity we want to log per environment. E.G. we don't want to show debug logs in Production environment.

It is defined as a number which corresponds to the type of log levels that will be displayed:

0: Fatal and Error
1: Warnings
2: Normal logs
3: Informational logs, success, fail, ready, start, ...
4: Debug logs
5: Trace logs
-999: Silent
+999: Verbose logs

Verbosity is set by the following methods, in descending order of priority:

- `APP_LOG_LEVEL` defined in `.env`
- Set to 1 if the the `NODE_ENV` defined on `process.env` is set to `production`
- Otherwise, the fallback defined in the logger as the default mode (current 3, as set by Consola)
