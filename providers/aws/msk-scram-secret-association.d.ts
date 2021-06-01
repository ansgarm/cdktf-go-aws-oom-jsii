import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskScramSecretAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#cluster_arn MskScramSecretAssociation#cluster_arn}.
     */
    readonly clusterArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#secret_arn_list MskScramSecretAssociation#secret_arn_list}.
     */
    readonly secretArnList: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association}.
 */
export declare class MskScramSecretAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MskScramSecretAssociationConfig);
    private _clusterArn;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string;
    get id(): string;
    private _secretArnList;
    get secretArnList(): string[];
    set secretArnList(value: string[]);
    get secretArnListInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
