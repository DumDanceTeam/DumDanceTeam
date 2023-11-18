export interface NavbarLink {
    label: string;
    link: string;
}

export interface TestmonialCardProps {
    profileImage: string;
    profileName: string;
    label: string;
}

export interface FAQItem{
    question: string;
    answer: string;
    linkUrl?: string;
    linkLabel?: string;
}

export interface FacebookPost{
    id: string;
    message: string;
    attachments?: FacebookAttachment;
    created_time: Date;
}

export interface FacebookAttachment{
    data:[{
        description: string;
        media:{
            image:{
                height: number;
                src: string;
                width: number;
            }
        }
        url: string;
    }]
}

export interface FooterInfo{
    label:string
}

export interface FooterLink{
    link:string
    label:string
}
