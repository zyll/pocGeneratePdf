
Bench on using prawn or nodecanvas to generate pdf.

Canvas
------
```sh
  cd canvas
  npm install
  node app.js
```

Prawn
-----
```sh
  cd prawn
  bundle install
  ruby app.rb
```

Bench (100 générations de petit PDF simultanées) :

```sh
time ./bench canvas 100

real 0m3.294s
user 0m10.661s
sys  0m1.592s
```

```sh
time ./bench prawn 100

real    0m25.701s
user    1m33.222s
sys     0m5.792s
```

Bench 2 (100 générations de gros PDF simultanées) :

```sh
time ./bench canvas 100

real 0m37.767s
user 2m5.688s
sys  0m10.621s
```

```sh
time ./bench prawn 100

real 1m11.089s
user 4m25.497s
sys  0m6.992s
```

Mémoire :

```sh
/usr/bin/time -v node app.js

              Maximum resident set size (kbytes): 165200
              Minor (reclaiming a frame) page faults: 14102
```

```sh
/usr/bin/time -v ruby app.rb

              Maximum resident set size (kbytes): 88800
              Minor (reclaiming a frame) page faults: 6598
```