

export default function Container({ children }: { children: React.ReactNode }) {

    return (
        <div className="relative mx-auto xl:px-52 md:px-20 px-2 xl:py-20 md:py-12 py-10">
            {children}
        </div>
    )
}



