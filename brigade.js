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
      SLACK_COLOR: "#000099",
      SLACK_USERNAME: `Brigade`,
      SLACK_TITLE: "Issue comment :)",
      SLACK_MESSAGE: JSON.stringify(e.payload.body)//JSON.stringify(e.payload.body)//`${e.payload.body.comment.body} URL ---> ${e.payload.body.comment.url}` //`${e.payload.body} URL ---> ${e.payload.url}`
   }

   console.log("PAYLOAD::: ", JSON.stringify(e.payload));

    slack.run()

    /* const env = {
        CHECK_PAYLOAD: e.payload,
        CHECK_NAME: "Brigade",
        CHECK_TITLE: "Run Tests",
    }; */

}