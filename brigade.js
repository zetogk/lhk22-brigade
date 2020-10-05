const { events, Job } = require("brigadier");

events.on("check_suite:requested", checkRequested);
events.on("check_suite:rerequested", checkRequested);
events.on("check_run:rerequested", checkRequested);



function checkRequested(e, p) {

    var slack = new Job("slack-notify", "technosophos/slack-notify:latest", ["/slack-notify"])
    slack.env = {
      SLACK_WEBHOOK: p.secrets.SLACK_WEBHOOK,
      SLACK_USERNAME: "Brigade",
      SLACK_TITLE: "Hello from Brigade",
      SLACK_MESSAGE: "This is a message from Brigade"
   }
    slack.run()

}