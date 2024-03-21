import { Application } from '@splinetool/runtime';

const canvas1 = document.getElementById('canvas3d');
const app1 = new Application(canvas1);
app1.load('https://prod.spline.design/LHm7fTMl2DQORLea/scene.splinecode');

const canvas2 = document.getElementById('canvas3d-1');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/Cdt0v-Q0IhcbeqKt/scene.splinecode');

const canvas3 = document.getElementById('canvas3d-2');
const app3 = new Application(canvas3);
app3.load('https://prod.spline.design/P3EaNmqHP7qpH81j/scene.splinecode');
