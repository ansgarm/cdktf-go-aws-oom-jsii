import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftSnapshotScheduleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}.
     */
    readonly clusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}.
     */
    readonly scheduleIdentifier: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association}.
 */
export declare class RedshiftSnapshotScheduleAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_snapshot_schedule_association.html aws_redshift_snapshot_schedule_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleAssociationConfig);
    private _clusterIdentifier;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    get id(): string;
    private _scheduleIdentifier;
    get scheduleIdentifier(): string;
    set scheduleIdentifier(value: string);
    get scheduleIdentifierInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
