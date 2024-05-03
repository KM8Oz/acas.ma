import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import FadeSlide from "../UI/FadeSlide";
import { Label } from "../Footer/styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
  slides: string[],
  id: string
}

const MiddleBlockWithSlide = ({ title, content, button, slides, t, id }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Label style={{
                fontSize:27
              }}>{t(title)}</Label>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
          <FadeSlide slides={slides} />
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};


export default withTranslation()(MiddleBlockWithSlide);
