Run below commnad to see the difference between using worker thrad, child process and running both without using anything.

```shell
# without worker thread
time node piEstimationTask.js

# using worker thread
time node piEstimationTaskWorkerThread.js

# using child process
time node piEstimationTaskChildProcess.js
```
