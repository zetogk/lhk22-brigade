const { events, Job } = require("brigadier");

/* events.on("check_suite:requested", checkRequested);
events.on("check_suite:rerequested", checkRequested);
events.on("check_run:rerequested", checkRequested);
 */

events.on("issue_comment:created", replyComment)

function replyComment(e, p) {

    var slack = new Job("slack-notify", "technosophos/slack-notify:latest", ["/slack-notify"])
    slack.env = {
      SLACK_WEBHOOK: p.secrets.SLACK_WEBHOOK,
      SLACK_USERNAME: "Brigade",
      SLACK_TITLE: "New comment in the repo",
      SLACK_MESSAGE: JSON.stringify(e.payload)
   }
    slack.run()

    /* const env = {
        CHECK_PAYLOAD: e.payload,
        CHECK_NAME: "Brigade",
        CHECK_TITLE: "Run Tests",
    }; */

}