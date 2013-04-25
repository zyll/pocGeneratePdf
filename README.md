
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

Bench (100 générations de PDF simultanées) :

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