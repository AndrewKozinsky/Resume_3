export namespace ExperienceData {
    export type Data = {
        company: string,
        duration: string,
        position: string,
        description: DescriptionArr
    }

    export type DescriptionArr = (TextDescription | ListDescription)[]

    type TextDescription = {
        type: 'text',
        text: string
    }

    type ListDescription = {
        type: 'list',
        items: string[]
    }
}
