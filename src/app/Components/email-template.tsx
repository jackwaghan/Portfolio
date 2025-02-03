import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}
const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>email : {email}</p>
      <p>Message : {message}</p>
    </div>
  );
};

export default EmailTemplate;
