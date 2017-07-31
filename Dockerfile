from node:8.1.0

COPY . .
RUN npm run build --production

RUN npm install -g serve
# Run serve when the image is run.
CMD serve -s build
# Let Docker know about the port that serve runs on.
EXPOSE 5000