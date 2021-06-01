import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftSnapshotScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#definitions RedshiftSnapshotSchedule#definitions}.
     */
    readonly definitions: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#description RedshiftSnapshotSchedule#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#force_destroy RedshiftSnapshotSchedule#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#identifier RedshiftSnapshotSchedule#identifier}.
     */
    readonly identifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#identifier_prefix RedshiftSnapshotSchedule#identifier_prefix}.
     */
    readonly identifierPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#tags RedshiftSnapshotSchedule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html#tags_all RedshiftSnapshotSchedule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html aws_redshift_snapshot_schedule}.
 */
export declare class RedshiftSnapshotSchedule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule.html aws_redshift_snapshot_schedule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleConfig);
    get arn(): string;
    private _definitions;
    get definitions(): string[];
    set definitions(value: string[]);
    get definitionsInput(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    get id(): string;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string | undefined;
    private _identifierPrefix?;
    get identifierPrefix(): string;
    set identifierPrefix(value: string);
    resetIdentifierPrefix(): void;
    get identifierPrefixInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
