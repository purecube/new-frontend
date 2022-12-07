import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { GameInfo } from "widgets/game-info";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";

export default function NearRunnerPage() {
  return (
    <>
      <Head>
        <title>PureCube</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
      </Head>

      <Container>

        <Header
          navbar={<Navbar />}
        />

        <Main>
          <div className="space-y-40 pb-40">
						<GameInfo
							image="/images/002.jpg"
							game="Near Runner"
							developer="PureCube"
							platform="mobile"
							genre="hybrid-casual"
							status="demo"
							network="Near"
							engine="Unity"
						/>
          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}