import * as Jimp from "jimp";
import * as socketIO from 'socket.io-client';
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import ReactJSXRuntime from 'react/jsx-runtime';
import { Buffer } from 'buffer';

Object.assign(globalThis, {
    Buffer,
    Jimp, socketIO, React, ReactDOMClient, ReactJSXRuntime
});