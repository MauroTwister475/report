import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SucessMessage(message: string) {
  toast.success(message);
}

export function ErrorMessage(message: string) {
  toast.error(message);
}