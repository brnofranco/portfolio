import Card from "./Cards";

import { SectionContainer } from "./styles";

export function Knowledge() {
    return (
        <SectionContainer>
            <h2>Conhecimentos</h2>
            <div className="cards-position">
                <Card imageName="html" title="HTML" />
                <Card imageName="css" title="CSS" />
                <Card imageName="js" title="JavaScript" />
                <Card imageName="typescript" title="TypeScript" />
                <Card imageName="react" title="React.js" />
                <Card imageName="next" title="Next.js" />
                <Card imageName="node" title="Node.js" />
                <Card imageName="git" title="Git" />
            </div>
        </SectionContainer>
    )
}