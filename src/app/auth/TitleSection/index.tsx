
interface TitleSectionPros {
    title: string,
}

export function TitleSection({ title }: TitleSectionPros) {
    return (
        <div className="w-full flex items-center justify-center mb-6">
            <h1 className="text-3xl text-gray-600 font-semibold">
                {title}
            </h1>
        </div>
    )
}