const os = require('os')

console.log('операционная система', os.platform())

console.log('архитектура процессора', os.arch())

console.log('информация по процессорам', os.cpus())

console.log('количество свободной памяти', os.freemem())

console.log('общее количество памяти', os.totalmem())

console.log('домашняя дирректория', os.homedir())

console.log('включен', os.uptime())