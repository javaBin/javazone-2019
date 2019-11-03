import {useFetch} from "./hooks/useFetch";
import {Partner} from "./models";

export function getAcademyPartners(academyPartners: string[]) {
    const partners = useFetch<Partner>(
        "https://d3o108dy577i1m.cloudfront.net/2019/partners/partners-2019.json"
    );
    return partners.filter(partner => {
        return academyPartners.indexOf(partner.name) !== -1;
    });
}
