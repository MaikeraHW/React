import { StrictMode } from "react"
import { Container } from "../../components/Container"
import { Logo } from "../../components/Logo"
import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <StrictMode>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>{children}</Container>
      <Container>
        <Footer />
      </Container>
    </StrictMode>
  )
}
