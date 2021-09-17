FROM kalilinux/kali-rolling
  
RUN apt update && apt upgrade -y && apt install git -y 

RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh

RUN apt install nodejs
  
RUN git clone https://github.com/HypeVoidSoul/Noir.git
  
RUN cd Noir

RUN npm install

WORKDIR /Noir
   
CMD nodemon