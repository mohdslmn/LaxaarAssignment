import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+916203204437" color="orange">+916203204437</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"} color="orange">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"} color="orange">
        Terms of Use
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
