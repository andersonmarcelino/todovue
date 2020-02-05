FROM node

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
    apt-get update && apt-get install -y libgtk2.0-0 libnotify-dev \
    libgconf-2-4 libnss3 libxss1 libasound2 xvfb git procps dbus-x11 zip lftp \
    coreutils google-chrome-stable && rm -rf /var/lib/apt/lists/*

ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

RUN mkdir -p /var/app

WORKDIR /var/app

COPY . .

RUN  npm install -g @vue/cli && npm install

EXPOSE 8080
