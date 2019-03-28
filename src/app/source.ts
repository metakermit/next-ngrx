export default `
{
  "forms": [
    {
      "type": "support",
      "fieldsets": [
        {
          "items": [
            {
              "title": {
                "en": "Case Type"
              },
              "type": "select",
              "required": false,
              "key": "case_type",
              "htmlClass": "",
              "options": [
                {
                  "name": {
                    "en": "Minor problem"
                  },
                  "value": "minor_problem"
                },
                {
                  "name": {
                    "en": "Critical bug"
                  },
                  "value": "critical_bug"
                },
                {
                  "name": {
                    "en": "App crash"
                  },
                  "value": "app_crash"
                },
                {
                  "name": {
                    "en": "Other"
                  },
                  "value": "other"
                }
              ]
            },
            {
              "key": "case_description",
              "htmlClass": "",
              "required": true,
              "type": "textArea",
              "title": {
                "en": "Case Description"
              }
            },
            {
              "key": "case_context",
              "htmlClass": "",
              "required": true,
              "type": "text",
              "maxLength": 255
            },
            {
              "key": "case_submit",
              "type": "submit",
              "value": "submit",
              "title": {
                "en": "Submit"
              }
            }
          ],
          "title": "New Support Case"
        }
      ],
      "title": {
        "en": "Support"
      }
    }
  ]
}`;
