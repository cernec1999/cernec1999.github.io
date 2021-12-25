function generateEmail()
{
    var name = "chris";
    var domain = "cerne";
    var tld = "xyz";

    var mail = name + String.fromCharCode(64) + domain + String.fromCharCode(46) + tld;

    return mail;
}