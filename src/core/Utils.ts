import {useFetch} from "./hooks/useFetch";
import {Partner} from "./models";

export function getAcademyPartners(academyPartners: string[]) {
    const partners = useFetch<Partner>(
        "/partners-2019.json"
    );
    return partners.filter(partner => {
        return academyPartners.indexOf(partner.name) !== -1;
    });
}
