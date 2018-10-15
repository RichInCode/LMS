FROM node:8

ADD package.json .
ADD ./build-webpack.sh .
RUN chmod +x ./build-webpack.sh
ADD ./build-webpack.sh .

CMD python manage.py runserver 0.0.0.0:8000