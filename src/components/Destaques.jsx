import * as LucideIcons from 'lucide-react';
import diferenciais from '../data/diferenciais.json';


export default function Destaques() {

    return (
        <section id="destaques" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className='max-w-4xl mx-auto px-8'>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Por que Escolher a Play Party Locações?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {diferenciais.map((diferencial, index) => {
                        const Icon = LucideIcons[diferencial.icone];

                        return (
                            <div key={index} className='text-center space-y-4'>
                                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                    {Icon ? <Icon className="h-8 w-8 text-primary" /> : null}
                                </div>
                                <h3 className="text-xl text-primary">{diferencial.titulo}</h3>
                                <p className="text-muted-foreground">{diferencial.descricao}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}