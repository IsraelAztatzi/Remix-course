import { redirect } from "@remix-run/node";

export function loader({ params }) {
    if (params['*'] === 'exp') {
        return redirect('/expenses');
    }
    throw new Response('Note found', { status: 404 });
}