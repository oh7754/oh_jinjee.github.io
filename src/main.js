import { Application } from '@splinetool/runtime';

const canvas1 = document.getElementById('canvas3d');
const app1 = new Application(canvas1);
app1.load('https://prod.spline.design/LHm7fTMl2DQORLea/scene.splinecode');

const canvas2 = document.getElementById('canvas3d-1');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/Cdt0v-Q0IhcbeqKt/scene.splinecode');
