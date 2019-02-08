import * as React from 'react';
import {KidsProgramSection} from "./KidsProgramSection";
import {kidsProgram} from "../../core/data/Kids.data";


export function KidsProgram() {
    return <>
        {kidsProgram.map(section =>
            <KidsProgramSection
                header={section.title}
                imageName={section.image}
                imageType={section.imageType}
                moreInfoLink={section.moreInfoLink}
                registrationLink={section.registrationLink}>
                <p>{section.desc}</p>
                <p><b>{section.recommendedAge}</b></p>
            </KidsProgramSection>
        )}
        </>
}