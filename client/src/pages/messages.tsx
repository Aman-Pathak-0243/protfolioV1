import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Message } from "@shared/schema";
import { format } from "date-fns";

export default function Messages() {
  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"]
  });

  if (isLoading) {
    return <div className="p-8">Loading messages...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
      <div className="space-y-4">
        {messages?.map(message => (
          <Card key={message.id}>
            <CardHeader>
              <CardTitle className="text-lg">
                From: {message.name} ({message.email})
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                {format(new Date(message.createdAt), "PPpp")}
              </div>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{message.message}</p>
            </CardContent>
          </Card>
        ))}
        {messages?.length === 0 && (
          <p className="text-muted-foreground">No messages yet.</p>
        )}
      </div>
    </div>
  );
}
