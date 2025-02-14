import { Card, CardContent } from "./ui/card";

interface TestimonyCardsProps {
  name: string;
  text: string;
}

function TestimonyCards({ name, text }: TestimonyCardsProps) {
  return (
    <Card className="bg-white shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <p className="text-gray-600 italic">&ldquo;{text}&rdquo;</p>
      </CardContent>
    </Card>
  );
}
export default TestimonyCards;
