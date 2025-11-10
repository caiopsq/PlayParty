import { Truck, Shield, ReceiptText } from 'lucide-react';
import diferenciais from '../data/diferenciais.json';


export default function Destaques() {

    return (
        <section id="destaques" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Por que Escolher a Play Party Locações?
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {diferenciais.map((diferenciais, index) => (
                        <div key={index} className='text-center space-y-4'>
                            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <diferenciais.icone className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl text-primary">{diferenciais.titulo}</h3>
                            <p className="text-muted-foreground">{diferenciais.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}