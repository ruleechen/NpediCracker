/*
* test
*/

const crack = require('./crack');

crack({
  groundDataString: 'data:image/png;base64,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',
  brickDataString: 'data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgtrNIOSNq4CgVZjt8xAsAuO1W4bYopYsBnrUskVuhj+Uscj+LrXlTr3O+NNIprbkyYEe84yOOlTXFvsQlgFY4wAKvBYBE7F2VkPC89KryFHThjyQCM/41g6jbNlFbGVcxeVdiOQ7jwxwegqD/AFci+S/zLklsc1Ynt8XN2wkVNkYYCQ8nnGB6+tVDu+Q43cncRxn8K76Suk7nNLdpEO8/5FFSZI43Lx7UVdyLs6cRL5K5I3E9KsSw2saoPl3HAyQcg5piiOSNEZR7EdRV6aeP7H5fGccMV5BFeLJ6o7kuxWcRsHXzyWOFUgYFQ3KwiEp5wYA8qfUd81pSG2eFJI0Iwo3EetUZIYnlVQwIfuV6H3qYvzKsjG1wQvcpJbx+UPKUlQc89CfxqlbsotCZkyTJlJR6f3a3b5I32AKBtG3IHWsC8WSCAKN2xT07V6NCpGUVHqc1SNpXJfsnptopY7yw8tcu4OBRWnJIj2kex1ZhglvkRHVcruwwPHNTT6VumYRMHD8HaMdv8aGi8u9tpBOEGMne/BGBWiWnW+ZfPtmUYcfKCRz0rx7uOtzs06GbplsW0dzIkas6DIJAwwOOv4VBNAY5GUCLBAIxJ3rTgidRewIsDmOUyA7cDa2T/PNSS2U00DHyLdtpwSIww7elNt81xJGJf2cvkySKsQZD0LCqk8SXNkhIRWZA3BY5zXUXFrJGWBtbRWL/AMcRzjrVO0UvpUJYqjxoVIijbPBq1V5VdLZiab0ZzH/CLo3IY4PP3Wor0BI/kXDXWMf3DRWn1ur3F7KHY51EQzWuVB+X0961ZbeBbwkQxgknOFHpRRXPPqVEozRp9huTsXJcAnHUY/8ArmuXv5ZLf5IZGjU5yEOAenpRRXR0RlLdmrpt3cmXm4lPzf3zWhbzSpbzBZHUc9GIooqJbGi2LMN3c+RH/pEv3R/GfSiiikM//9k=',
  brickTop: 31,
}).then((left) => {
  console.log(left);
});