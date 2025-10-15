import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
  };

  const services = [
    {
      title: 'Классический маникюр',
      description: 'Профессиональный уход за ногтями с покрытием премиум-класса',
      price: 'от 2500 ₽',
      icon: 'Sparkles'
    },
    {
      title: 'Аппаратный маникюр',
      description: 'Бережная обработка кутикулы без повреждений',
      price: 'от 3000 ₽',
      icon: 'Gem'
    },
    {
      title: 'Наращивание ногтей',
      description: 'Создание идеальной формы и длины',
      price: 'от 4500 ₽',
      icon: 'Crown'
    },
    {
      title: 'Дизайн ногтей',
      description: 'Эксклюзивные авторские дизайны',
      price: 'от 1500 ₽',
      icon: 'Palette'
    }
  ];

  const portfolio = [
    { id: 1, alt: 'Элегантный французский маникюр' },
    { id: 2, alt: 'Дизайн с золотом' },
    { id: 3, alt: 'Нюдовый маникюр' },
    { id: 4, alt: 'Свадебный дизайн' },
    { id: 5, alt: 'Минимализм' },
    { id: 6, alt: 'Праздничный дизайн' }
  ];

  const reviews = [
    {
      name: 'Анастасия',
      text: 'Невероятно довольна работой мастера! Маникюр держится уже три недели без единого скола. Атмосфера салона располагает к расслаблению.',
      rating: 5
    },
    {
      name: 'Елена',
      text: 'Профессионализм на высшем уровне. Мастер учла все мои пожелания и создала идеальный дизайн. Буду вашим постоянным клиентом!',
      rating: 5
    },
    {
      name: 'Мария',
      text: 'Великолепный сервис! Записалась через сайт очень удобно. Маникюр выглядит как произведение искусства.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">LUXURY NAILS</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Услуги', 'Портфолио', 'Прайс', 'Отзывы', 'Запись'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-6xl font-bold mb-6 text-primary animate-fade-in">
            Искусство маникюра
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Премиальный уход за вашими ногтями в атмосфере роскоши и комфорта
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('запись')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            Записаться на процедуру
          </Button>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <Icon name={service.icon} size={48} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-xl font-bold text-accent">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer border-border">
                <div className="aspect-square bg-secondary/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-500" />
                  <Icon name="Image" size={64} className="text-muted-foreground/30 relative z-10" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">Прайс-лист</h2>
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { service: 'Классический маникюр', price: '2500 ₽' },
                  { service: 'Аппаратный маникюр', price: '3000 ₽' },
                  { service: 'Комбинированный маникюр', price: '3200 ₽' },
                  { service: 'Наращивание ногтей', price: 'от 4500 ₽' },
                  { service: 'Коррекция нарощенных ногтей', price: '3500 ₽' },
                  { service: 'Покрытие гель-лак', price: '2000 ₽' },
                  { service: 'Снятие покрытия', price: '500 ₽' },
                  { service: 'Дизайн 1 ноготь', price: 'от 150 ₽' },
                  { service: 'Авторский дизайн', price: 'от 1500 ₽' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0">
                    <span className="text-lg text-card-foreground">{item.service}</span>
                    <span className="text-xl font-bold text-accent">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-card-foreground">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="запись" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">Онлайн-запись</h2>
          <Card className="border-border">
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-card-foreground">Ваше имя</Label>
                  <Input id="name" placeholder="Анна" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-card-foreground">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="service" className="text-card-foreground">Услуга</Label>
                  <Input id="service" placeholder="Классический маникюр" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="date" className="text-card-foreground">Желаемая дата</Label>
                  <Input id="date" type="date" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-card-foreground">Комментарий</Label>
                  <Textarea id="message" placeholder="Ваши пожелания..." className="mt-2" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">LUXURY NAILS</h3>
              <p className="text-primary-foreground/80">Премиальный маникюрный салон</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={18} />
                  info@luxurynails.ru
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="MapPin" size={18} />
                  Москва, ул. Примерная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 10:00 — 21:00</p>
                <p>Сб-Вс: 11:00 — 20:00</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
            <p>&copy; 2024 LUXURY NAILS. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
