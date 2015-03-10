MEAN Boilerplate
=====

My personal projects usually harness the power of Angular 1.4 and Socket.io to deliver dynamic applications with real-time notifications functionality. When no REST API service is available on the same domain, a Node.js always comes in handy to provide a convenient wrapper for server-side REST clients.

This template project is a barebones layout of how a MVW application should look. The folders follow to some extent the usual layout of MVC full-stack applications, although the MVC pattern is not strictly observed.

In a nuthsell this project is a simple boilerplate to help you bootstrap your app in Angular, Node.js, Express and MongoDB (it's assumed that the latter is NOT running as a service).

### Installation

A Makefile has been provided for your convenience. This same Makefile contain actions required to automate the development effort as well. For installing everything just type on your console:

```$ make init```

### Development

Gulp is provided to help out with the building and development automation.

The following Makefile just isntalls all dependencies and starts Gulp when running for initializasing something.

```$ make init```

Of course Gulp can be (and will) launched separately.

```$ gulp dev```

----------
# License - "BSD License" #

Copyright (c) 2015, Pablo Deeleman
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
