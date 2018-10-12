FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /app
WORKDIR /app

ADD requirements.txt /app/
RUN pip install -r requirements.txt

ADD . /app/

EXPOSE 8000

FROM node:8

ADD package.json .
ADD ./build-webpack.sh .
RUN chmod +x ./build-webpack.sh

RUN ls
RUN ./build-webpack.sh

CMD python manage.py runserver 0.0.0.0:8000