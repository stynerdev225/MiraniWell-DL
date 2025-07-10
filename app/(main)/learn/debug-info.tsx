import { getUnits, getUserProgress, getCourseProgress } from "@/db/queries";

export const DebugInfo = async () => {
    const userProgress = await getUserProgress();
    const units = await getUnits();
    const courseProgress = await getCourseProgress();

    return (
        <div className="bg-yellow-100 border border-yellow-400 rounded p-4 mb-4">
            <h3 className="font-bold text-yellow-800 mb-2">Debug Info:</h3>
            <div className="text-sm text-yellow-700 space-y-1">
                <p><strong>User has active course:</strong> {userProgress?.activeCourse ? 'Yes' : 'No'}</p>
                <p><strong>Active course ID:</strong> {userProgress?.activeCourseId || 'None'}</p>
                <p><strong>Units count:</strong> {units?.length || 0}</p>
                <p><strong>Course progress:</strong> {courseProgress ? 'Yes' : 'No'}</p>
                <p><strong>Units data:</strong> {JSON.stringify(units?.map(u => ({ id: u.id, title: u.title, lessonsCount: u.lessons?.length })), null, 2)}</p>
            </div>
        </div>
    );
};
